const csvParser = require('csv-parser');
const fs = require('fs');
const StocksTable = process.env.StocksTable || "24836000000013607"
const catalyst = require('zcatalyst-sdk-node')


const stockDataUpload = async (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }

    const filePath = req.file.path;
    const newHeaders = [
        'indexName',
        'indexDate',
        'openIndexValue',
        'highIndexValue',
        'lowIndexValue',
        'closingIndexValue',
        'pointsChange',
        'changePercetage',
        'volume',
        'turnOverInCr',
        'PE',
        'PB',
        'divYield',
    ];
    const numericFields = [
        'openIndexValue',
        'highIndexValue',
        'lowIndexValue',
        'closingIndexValue',
        'pointsChange',
        'changePercetage',
        'volume',
        'turnOverInCr',
        'PE',
        'PB',
        'divYield',
    ];
    const dateFields = ['indexDate'];

    const jsonData = [];

    // Read and process the CSV file
    fs.createReadStream(filePath)
        .pipe(csvParser())
        .on('data', (row) => {
            const transformedRow = {};
            let isEmptyRow = true;

            Object.keys(row).forEach((key, index) => {
                const newKey = newHeaders[index] || key;
                let value = row[key].trim();

                if (value === '-') {
                    value = null; // Replace "-" with null
                } else if (numericFields.includes(newKey)) {
                    value = parseFloat(value);
                    if (isNaN(value)) value = null; // Handle non-parsable values
                } else if (dateFields.includes(newKey)) {
                    value = new Date(value)
                    if (isNaN(value)) value = null;
                }

                if (value !== null && value !== '') {
                    isEmptyRow = false; // Mark row as non-empty if any value is non-null and non-empty
                }

                transformedRow[newKey] = value;
            });

            if (!isEmptyRow) {
                jsonData.push(transformedRow); // Only push non-empty rows
            }
        })
        .on('end', async () => {
            // Delete the CSV file after processing
            fs.unlinkSync(filePath);


            const dataStore = catalyst.initialize(req).datastore()
            let insertValue = await dataStore.table(StocksTable).insertRows(jsonData)
                .then((resp) => {
                    console.log('StockData Updated Successfully')
                    res.status(201).json({
                        message: "Stock Data updated successfully",
                        insertedRowCount: resp.length
                    })
                }).catch((error) => {
                    console.log('error in updating stock data', error)
                    res.status(500).json({
                        message: "error in updating stock data",
                        error: error
                    })
                })

        })
        .on('error', (err) => {
            console.error('Error processing file:', err);
            res.status(500).send('Error processing file');
        });
};

module.exports = { stockDataUpload };
