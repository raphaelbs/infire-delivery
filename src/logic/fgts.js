import dayjs from "dayjs";
import "dayjs/locale/pt-br";
dayjs.locale("pt-br");

const FGTS_YEARLY_INTEREST_RATE = 0.03;
const TR_RATE = 0;

const FGTS_MONTHLY_INTEREST_RATE =
  Math.pow(1 + FGTS_YEARLY_INTEREST_RATE, 1 / 12) - 1 + TR_RATE;

const FGTS_TABLE = [
  [500, 0.5, 0],
  [1000, 0.4, 50],
  [5000, 0.3, 150],
  [10000, 0.2, 650],
  [15000, 0.15, 1150],
  [20000, 0.1, 1900],
  [+Infinity, 0.05, 2900],
];

const countMonths = birthdayMonth => {
  const now = dayjs();
  const bday = dayjs().set("month", birthdayMonth);
  let months = 0;

  if (bday.isAfter(now)) {
    months = bday.diff(now, "month");
  } else {
    months = bday.add(1, "year").diff(now, "month");
  }

  return months;
};

const calculateInterestRate = months =>
  Math.pow(FGTS_MONTHLY_INTEREST_RATE + 1, months);

const calculateCompoundInterests = (fgtsBalance, monthlyDeposit, months) =>
  new Array(months)
    .fill(monthlyDeposit)
    .map((value, index) => value * calculateInterestRate(index))
    .reduce((totalValue, value) => totalValue + value, 0) +
  fgtsBalance * calculateInterestRate(months);

export const normalizeNumber = number =>
  Number(number.replace(".", "").replace(",", "."));

export const calculateFGTSFrom = ({
  birthdayMonth,
  fgtsBalance,
  monthlyDeposit,
}) => {
  const months = countMonths(birthdayMonth);

  const futureBalanceValueWithoutInterests =
    normalizeNumber(fgtsBalance) + normalizeNumber(monthlyDeposit) * months;

  const futureBalance = calculateCompoundInterests(
    normalizeNumber(fgtsBalance),
    normalizeNumber(monthlyDeposit),
    months
  );

  for (const [maxValue, percentage, additional] of FGTS_TABLE) {
    if (futureBalance <= maxValue) {
      const withdrawValue = futureBalance * percentage + additional;
      const leftAfterWithdraw = futureBalance * (1 - percentage);

      return {
        months,
        tableValues: {
          percentage,
          additional,
        },
        withdrawValue,
        leftAfterWithdraw,
        futureBalance,
        profit: futureBalance - futureBalanceValueWithoutInterests,
      };
    }
  }
};
