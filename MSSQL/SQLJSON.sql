SELECT (
    '{"ID": "' + CAST(ID AS NVARCHAR(36)) +
    '", "number": ' + CAST(number AS NVARCHAR) +
    ', "type": "' + type +
    '", "length": ' + CAST(length AS NVARCHAR) +
    ', "width": ' + CAST(width AS NVARCHAR) +
    ', "height": ' + CAST(height AS NVARCHAR) +
    ', "weight": ' + CAST(weight AS NVARCHAR) +
    ', "isEmpty": ' + CAST(is_empty AS NVARCHAR) +
    ', "dateOfBegin": "' + CONVERT(NVARCHAR, date_of_come, 120) + '"}') AS JSON
FROM containers;