SELECT 
    ('{"ID": "' + CAST(ID AS NVARCHAR(36)) +
    '", "id_container": "' + CAST(ID_container AS NVARCHAR(36)) +
    '", "date_of_begin": "' + CONVERT(VARCHAR, date_of_begin, 120) +
    '", "date_of_end": "' + CONVERT(VARCHAR, date_of_end, 120) +
    '", "type_operation": "' + CAST(type_operation AS NVARCHAR(36)) +
    '", "fio_operator": "' + fio_operator +
    '", "place_inspections": "' + place_inspections + '"}') AS JSON
FROM operation
WHERE id_container = 2; 
