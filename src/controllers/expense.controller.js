import Expense from "../models/expense.model.js";

export const getExpenses = async (req, res) => {
  const expenses = await Expense.find({
    user: req.user.id,
  });
  res.json({ expenses });
};

export const createExpense = async (req, res) => {
  const { amount, category, detail, date } = req.body;

  const newExpense = new Expense({
    amount,
    category,
    detail,
    date,
    user: req.user.id,
  });
  const savedExpense = await newExpense.save();

  res.json({ savedExpense });
};

export const getExpense = async (req, res) => {
  const expense = await Expense.findById(req.params.id);

  if (!expense) return res.status(404).json({ message: "Expense not found" });

  res.json({ expense });
};

export const deleteExpense = async (req, res) => {
  const expense = await Expense.findByIdAndDelete(req.params.id);

  if (!expense) return res.status(404).json({ message: "Expense not found" });

  return res.sendStatus(204);
};

export const updateExpense = async (req, res) => {
  const expense = await Expense.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  if (!expense) return res.status(404).json({ message: "Expense not found" });

  res.json({ expense });
};
