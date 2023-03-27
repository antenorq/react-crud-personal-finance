import FormIncomeExpense from "../components/FormIncomeExpense";
import Container from "@mui/material/Container";

//I KNOW I NEED REFACTORE IT TO PUT IN A GLOBAL CONTEXT
const devEnv = process.env.NODE_ENV !== "production";
const { REACT_APP_DEV_URL, REACT_APP_PROD_URL } = process.env;

const url_income =
  (devEnv ? REACT_APP_DEV_URL : REACT_APP_PROD_URL) + "/incomes";

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
