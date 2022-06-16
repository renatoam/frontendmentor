import { readFileSync } from "fs";
import { NextApiRequest, NextApiResponse } from "next";
import { resolve } from "path";

export default function(request: NextApiRequest, response: NextApiResponse) {
  if (request.method !== 'GET') return response.status(405).send({
    message: 'Method not allowed. Please perform only GET requests.'
  })

  const pathToExpensesData = resolve('./public', 'data.json')
  const jsonExpenses = readFileSync(pathToExpensesData).toString('utf-8')
  const expenses = JSON.parse(jsonExpenses)

  return response.status(200).send(expenses)
}