import FormIncomeExpense from "../components/FormIncomeExpense";
import Container from "@mui/material/Container";

const url_expense = "http://localhost:8000/expenses";

const Expense = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{ borderRadius: "8px", backgroundColor: "#f7f7f7", p: 2 }}
    >
      {/*FORM GENERIC TO SHOW EXPENSE FORM*/}
      <FormIncomeExpense formType="expense" url={url_expense} />
    </Container>
  );
};

export default Expense;
