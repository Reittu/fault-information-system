-- Before issuing this on server, either login (procedures/login) or implement a temporary key system
-- to verify the targeted report is made by authorized user.
-- For demo purposes this application only has a guest user available with no explicit login for now.
-- Way better to use a premade system such as Cognito for authentication than implement this ourselves.

SELECT temp_key FROM Report INNER JOIN Reporter ON reporter_id = Reporter.id;

-- if(query.key === sql.temp_key) ...

UPDATE Report
SET Subject = '...', Description = '...'
WHERE id = <reportId> AND reporter_id = <loggedInUserId>