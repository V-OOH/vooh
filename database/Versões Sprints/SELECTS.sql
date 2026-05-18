USE vooh;

/*
	Select para o arquivo
*/

-- Select para realizar a buscar da empresa pelo Mac do display
SELECT e.id, e.nome_empresa, e.urlWEBHOOK 
FROM empresa e 
JOIN display d 
	ON d.fk_empresa = e.id
WHERE d.mac = ?;

-- Select para buscar parametros por empresa
SELECT fk_display, fk_componente, fk_empresa, minimo, maximo 
FROM componente_display 
WHERE fk_empresa = ?;