// const QueryGenerator = (tableName,queryParams) => {

//     const operatorMap = {
//         '>': '>',
//         '<': '<',
//         '>=': '>=',
//         '<=': '<=',
//         '!=': '!=',
//         '=': '=',
//         'like': 'LIKE'
//     };

//     let whereClauses = [];

//     // Build WHERE conditions
//     for (let [key, value] of Object.entries(queryParams)) {
//         let match = key.match(/([a-zA-Z_]+)([<>!=]+)/); // Regex to separate field and operator
//         if (match) {
//             const field = match[1];
//             const operator = match[2];
//             if (operatorMap[operator]) {
//                 whereClauses.push(`${field} ${operatorMap[operator]} '${value}'`);
//             }
//         } else {
//             // Default to equality if no operator is specified
//             whereClauses.push(`${key} = '${value}'`);
//         }
//     }

//     // Join clauses with AND
//     const whereSQL = whereClauses.length > 0 ? `WHERE ${whereClauses.join(' AND ')}` : '';

//     // Final SQL query
//     const sqlQuery = `SELECT * FROM ${tableName} ${whereSQL};`;

//     return sqlQuery
   
// }

// module.exports = QueryGenerator


















// const QueryGenerator = (tableName, queryParams) => {
//     const operatorMap = {
//         '>': '>',
//         '<': '<',
//         '>=': '>=',
//         '<=': '<=',
//         '!=': '!=',
//         '=': '=',
//         'like': 'LIKE'
//     };

//     const specialOperatorMap = {
//         'startsWith': 'LIKE',
//         'endsWith': 'LIKE',
//         'contains': 'LIKE'
//     };

//     let whereClauses = [];
//     let page = 1; // Default page number
//     let limit = 10; // Default limit per page

//     // Extract pagination parameters
//     if (queryParams.page) {
//         page = parseInt(queryParams.page, 10);
//         delete queryParams.page;
//     }
//     if (queryParams.limit) {
//         limit = parseInt(queryParams.limit, 10);
//         delete queryParams.limit;
//     }

//     // Build WHERE conditions based on queryParams
//     for (let [key, value] of Object.entries(queryParams)) {
//         let match;

//         // Check for "startsWith", "endsWith", or "contains"
//         if (key.includes('startsWith')) {
//             const field = key.replace('.startsWith', '');
//             whereClauses.push(`${field} LIKE '${value}%'`);
//         } else if (key.includes('endsWith')) {
//             const field = key.replace('.endsWith', '');
//             whereClauses.push(`${field} LIKE '%${value}'`);
//         } else if (key.includes('contains')) {
//             const field = key.replace('.contains', '');
//             whereClauses.push(`${field} LIKE '%${value}%'`);
//         } else {
//             // Default equality operator check
//             match = key.match(/([a-zA-Z_]+)([<>!=]+)/); // Regex to separate field and operator
//             if (match) {
//                 const field = match[1];
//                 const operator = match[2];
//                 if (operatorMap[operator]) {
//                     whereClauses.push(`${field} ${operatorMap[operator]} '${value}'`);
//                 }
//             } else if (key.includes('==')) {
//                 const field = key.replace('==', '');
//                 whereClauses.push(`${field} = '${value}'`);
//             } else if (key.includes('!=')) {
//                 const field = key.replace('!=', '');
//                 whereClauses.push(`${field} != '${value}'`);
//             } else {
//                 whereClauses.push(`${key} = '${value}'`); // Default equality if no operator
//             }
//         }
//     }

//     // Combine WHERE conditions
//     const whereSQL = whereClauses.length > 0 ? `WHERE ${whereClauses.join(' AND ')}` : '';

//     // Pagination logic
//     const offset = (page - 1) * limit;
//     const paginationSQL = `LIMIT ${limit} OFFSET ${offset}`;

//     // Final SQL query
//     const sqlQuery = `SELECT * FROM ${tableName} ${whereSQL} ${paginationSQL};`;

//     return sqlQuery;
// };

// module.exports = QueryGenerator;











// const QueryGenerator = (tableName, queryParams) => {
//     const operatorMap = {
//         '>': '>',
//         '<': '<',
//         '>=': '>=',
//         '<=': '<=',
//         '!=': '!=',
//         '=': '=',
//         'like': 'LIKE'
//     };

//     const specialOperatorMap = {
//         'startsWith': 'LIKE',
//         'endsWith': 'LIKE',
//         'contains': 'LIKE'
//     };

//     let whereClauses = [];
//     let orClauses = [];  // To store OR conditions
//     let page = 1; // Default page number
//     let limit = 10; // Default limit per page

//     // Extract pagination parameters
//     if (queryParams.page) {
//         page = parseInt(queryParams.page, 10);
//         delete queryParams.page;
//     }
//     if (queryParams.limit) {
//         limit = parseInt(queryParams.limit, 10);
//         delete queryParams.limit;
//     }

//     // Iterate through the queryParams to build WHERE clauses
//     for (let [key, value] of Object.entries(queryParams)) {
//         let match;

//         // Handle special operators: startsWith, endsWith, contains
//         if (key.includes('startsWith')) {
//             const field = key.replace('.startsWith', '');
//             whereClauses.push(`${field} LIKE '${value}*'`);
//         } else if (key.includes('endsWith')) {
//             const field = key.replace('.endsWith', '');
//             whereClauses.push(`${field} LIKE '*${value}'`);
//         } else if (key.includes('contains')) {
//             const field = key.replace('.contains', '');
//             whereClauses.push(`${field} LIKE '*${value}*'`);
//         } else {
//             // Check for "OR" conditions
//             if (key.includes('|')) {
//                 const fields = key.split('|');
//                 const orCondition = fields.map(field => `${field} = '${value}'`).join(' OR ');
//                 orClauses.push(`(${orCondition})`);
//             } else {
//                 // Default equality or operator check
//                 match = key.match(/([a-zA-Z_]+)([<>!=]+)/); // Regex to separate field and operator
//                 if (match) {
//                     const field = match[1];
//                     const operator = match[2];
//                     if (operatorMap[operator]) {
//                         whereClauses.push(`${field} ${operatorMap[operator]} '${value}'`);
//                     }
//                 } else if (key.includes('==')) {
//                     const field = key.replace('==', '');
//                     whereClauses.push(`${field} = '${value}'`);
//                 } else if (key.includes('!=')) {
//                     const field = key.replace('!=', '');
//                     whereClauses.push(`${field} != '${value}'`);
//                 } else {
//                     whereClauses.push(`${key} = '${value}'`); // Default equality if no operator
//                 }
//             }
//         }
//     }

//     // Combine WHERE conditions with OR if needed
//     const whereSQL = whereClauses.length > 0 ? `WHERE ${whereClauses.join(' AND ')}` : '';
//     const orSQL = orClauses.length > 0 ? `(${orClauses.join(' OR ')})` : '';
    
//     const finalWhereSQL = whereSQL && orSQL ? `${whereSQL} AND ${orSQL}` : whereSQL || orSQL;

//     // Pagination logic
//     const offset = (page - 1) * limit;
//     const paginationSQL = `LIMIT ${limit} OFFSET ${offset}`;

//     // Final SQL query
//     const sqlQuery = `SELECT * FROM ${tableName} ${finalWhereSQL} ${paginationSQL};`;

//     return sqlQuery;
// };

// module.exports = QueryGenerator;









// const QueryGenerator = (tableName, queryParams) => {
//     const operatorMap = {
//         'greaterThan': '>',
//         'lessThan': '<',
//         'greaterThanEqual': '>=',
//         'lessThanEqual': '<=',
//         'notEquals': '!=',
//         'equals': '='
//     };

//     let whereClauses = [];
//     let orClauses = []; // To store OR conditions
//     let page = 1; // Default page number
//     let limit = 10; // Default limit per page

//     // Extract pagination parameters
//     if (queryParams.page) {
//         page = parseInt(queryParams.page, 10);
//         delete queryParams.page;
//     }
//     if (queryParams.limit) {
//         limit = parseInt(queryParams.limit, 10);
//         delete queryParams.limit;
//     }

//     // Iterate through the queryParams to build WHERE clauses
//     for (let [key, value] of Object.entries(queryParams)) {
//         if (key.includes('.')) {
//             const [field, operator] = key.split('.');

//             if (operatorMap[operator]) {
//                 // Add conditions for comparison operators
//                 whereClauses.push(`${field} ${operatorMap[operator]} '${value}'`);
//             } else if (operator === 'isNull') {
//                 // Handle IS NULL
//                 whereClauses.push(`${field} IS NULL`);
//             } else if (operator === 'isNotNull') {
//                 // Handle IS NOT NULL
//                 whereClauses.push(`${field} IS NOT NULL`);
//             } else if (operator === 'startsWith') {
//                 // Handle startsWith
//                 whereClauses.push(`${field} LIKE '${value}%'`);
//             } else if (operator === 'endsWith') {
//                 // Handle endsWith
//                 whereClauses.push(`${field} LIKE '%${value}'`);
//             } else if (operator === 'contains') {
//                 // Handle contains
//                 whereClauses.push(`${field} LIKE '%${value}%'`);
//             } else {
//                 throw new Error(`Unsupported operator: ${operator}`);
//             }
//         } else if (key.includes('|')) {
//             // Check for OR conditions
//             const fields = key.split('|');
//             const orCondition = fields.map(field => `${field} = '${value}'`).join(' OR ');
//             orClauses.push(`(${orCondition})`);
//         } else {
//             // Default equality
//             whereClauses.push(`${key} = '${value}'`);
//         }
//     }

//     // Combine WHERE conditions with OR if needed
//     const whereSQL = whereClauses.length > 0 ? `WHERE ${whereClauses.join(' AND ')}` : '';
//     const orSQL = orClauses.length > 0 ? `(${orClauses.join(' OR ')})` : '';
//     const finalWhereSQL = whereSQL && orSQL ? `${whereSQL} AND ${orSQL}` : whereSQL || orSQL;

//     // Pagination logic
//     const offset = (page - 1) * limit;
//     const paginationSQL = `LIMIT ${limit} OFFSET ${offset}`;

//     // Final SQL query
//     const sqlQuery = `SELECT * FROM ${tableName} ${finalWhereSQL} ${paginationSQL};`;

//     return sqlQuery;
// };

// module.exports = QueryGenerator;













const QueryGenerator = (tableName, queryParams) => {
    const operatorMap = {
        'greaterThan': '>',
        'lessThan': '<',
        'greaterThanEqual': '>=',
        'lessThanEqual': '<=',
        'notEquals': '!=',
        'equals': '='
    };

    let whereClauses = [];
    let page = 1; 
    let limit = 10;

    if (queryParams.page) {
        page = parseInt(queryParams.page, 10);
        delete queryParams.page;
    }
    if (queryParams.limit) {
        limit = parseInt(queryParams.limit, 10);
        delete queryParams.limit;
    }

    for (let [key, value] of Object.entries(queryParams)) {
        if (key.includes('.')) {
            const [field, operator] = key.split('.');

            if (operatorMap[operator]) {
                if (value.includes('|')) {
                    const values = value.split('|').map(v => `'${v}'`).join(' OR ');
                    whereClauses.push(`(${values.split(' OR ').map(v => `${field} ${operatorMap[operator]} ${v}`).join(' OR ')})`);
                } else {
                    whereClauses.push(`${field} ${operatorMap[operator]} '${value}'`);
                }
            } else if (operator === 'isNull') {
                whereClauses.push(`${field} IS NULL`);

            } else if (operator === 'isNotNull') {
                whereClauses.push(`${field} IS NOT NULL`);

            } else if (operator === 'startsWith') {
                whereClauses.push(`${field} LIKE '${value}*'`);

            } else if (operator === 'endsWith') {
                whereClauses.push(`${field} LIKE '*${value}'`);

            } else if (operator === 'contains') {
                whereClauses.push(`${field} LIKE '*${value}*'`);

            } else {
                throw new Error(`Unsupported operator: ${operator}`);
            }
        } else {
            whereClauses.push(`${key} = '${value}'`);
        }
    }

    const whereSQL = whereClauses.length > 0 ? `WHERE ${whereClauses.join(' AND ')}` : '';

    const offset = (page - 1) * limit;
    const paginationSQL = `LIMIT ${limit} OFFSET ${offset}`;

    const sqlQuery = `SELECT * FROM ${tableName} ${whereSQL} ${paginationSQL};`;

    return sqlQuery;
};

module.exports = QueryGenerator;








// const QueryGenerator = (tableName, queryParams) => {
//     const operatorMap = {
//         'greaterThan': '>',
//         'lessThan': '<',
//         'greaterThanEqual': '>=',
//         'lessThanEqual': '<=',
//         'notEquals': '!=',
//         'equals': '=',
//         'isNull': 'IS NULL',
//         'isNotNull': 'IS NOT NULL',
//         'startsWith': 'LIKE',
//         'endsWith': 'LIKE',
//         'contains': 'LIKE'
//     };

//     let whereClauses = [];
//     let orClauses = []; // To store OR conditions
//     let page = 1; // Default page number
//     let limit = 10; // Default limit per page

//     // Extract pagination parameters
//     if (queryParams.page) {
//         page = parseInt(queryParams.page, 10);
//         delete queryParams.page;
//     }
//     if (queryParams.limit) {
//         limit = parseInt(queryParams.limit, 10);
//         delete queryParams.limit;
//     }

//     // Iterate through the queryParams to build WHERE and OR clauses
//     for (let [key, value] of Object.entries(queryParams)) {
//         if (key.includes('.')) {
//             const [field, operator] = key.split('.');

//             if (value.includes('|')) {
//                 // Handle OR conditions by splitting the values and creating individual conditions
//                 const orConditions = value.split('|').map(v => {
//                     if (operatorMap[operator]) {
//                         return `${field} ${operatorMap[operator]} '${v}'`;
//                     } else {
//                         throw new Error(`Unsupported operator: ${operator}`);
//                     }
//                 });
//                 orClauses.push(`(${orConditions.join(' OR ')})`);
//             } else if (operatorMap[operator]) {
//                 // Handle normal conditions
//                 whereClauses.push(`${field} ${operatorMap[operator]} '${value}'`);
//             } else {
//                 throw new Error(`Unsupported operator: ${operator}`);
//             }
//         } else {
//             whereClauses.push(`${key} = '${value}'`);
//         }
//     }

//     // Combine WHERE conditions with OR conditions
//     const whereSQL = whereClauses.length > 0 ? `WHERE ${whereClauses.join(' AND ')}` : '';
//     const orSQL = orClauses.length > 0 ? `(${orClauses.join(' OR ')})` : '';
//     const finalWhereSQL = whereSQL && orSQL ? `${whereSQL} AND ${orSQL}` : whereSQL || orSQL;

//     // Pagination logic
//     const offset = (page - 1) * limit;
//     const paginationSQL = `LIMIT ${limit} OFFSET ${offset}`;

//     // Final SQL query
//     const sqlQuery = `SELECT * FROM ${tableName} ${finalWhereSQL} ${paginationSQL};`;

//     return sqlQuery;
// };

// module.exports = QueryGenerator;
