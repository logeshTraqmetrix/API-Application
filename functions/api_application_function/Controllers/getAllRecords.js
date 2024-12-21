async function getMyPagedRows(dataStore, tableId, hasNext = true, nextToken = undefined, allData = []) {
   
	if (!hasNext) {
		return allData;
	}

	try {
		const response = await dataStore.table(tableId).getPagedRows({
			nextToken,
			maxRows: 100
		});
		//    console.log("error or not")
		const { data, next_token, more_records } = response;
		console.log('rows:', data);
		allData = allData.concat(data);

		// If there are more records, recursively call the function with the next token
		if (more_records) {
			return await getMyPagedRows(dataStore, more_records, next_token, allData);
		} else {
			return allData;
		}
	} catch (err) {
		console.log("Error : " + err.toString());
		throw err;
	}
}


module.exports = getMyPagedRows