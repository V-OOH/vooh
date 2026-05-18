USE vooh;

-- Select para realizar a buscar da empresa pelo Mac do display
SELECT e.id, e.nome_empresa, e.urlWEBHOOK 
FROM empresa e 
JOIN display d 
	ON d.fk_empresa = e.id
WHERE d.mac = ?