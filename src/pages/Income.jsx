import FormIncomeExpense from "../components/FormIncomeExpense";
import Container from "@mui/material/Container";

const url_income = "http://localhost:8000/incomes";

const Income = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        borderRadius: "8px",
        bgcolor: "#f7f7f7",
        p: 2,
      }}
    >
      {/*FORM GENERIC TO SHOW INCOME FORM*/}
      <FormIncomeExpense formType="income" url={url_income} />
    </Container>
  );
};

export default Income;
