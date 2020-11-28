const db = require('../utils/database');

// Corrigir, não posso checar se a cobrança existe pelo client id
async function getPaymentsByClientId(clientId) {

}

async function insertPayment(clientId, description, value, dueDate) {
	const query = `INSERT INTO payments (
		client_id, description, value, due_date
	) values ($1, $2, $3, $4)
	RETURNING *`;

	const result = await db.query({
		text: query,
		values: [clientId, description, value, dueDate],
	});

	return result.rows.shift();
}

module.exports = {
	getPaymentsByClientId,
	insertPayment,
};