interface QueryParams {
  startDate?: string;
  endDate?: string;
  sourceDomain?: string | string[];
  destinationDomain?: string | string[];
  txHash?: string;
  address?: string;
  page?: string;
  limit?: string;
  date?: string;
  week?: string;
  year?: string;
  month?: string;
}

const MAX_LIMIT = 100;
const VALID_DOMAINS = ["0", "1", "2", "3", "6", "7"];
const NOW = Math.floor(Date.now() / 1000);

function validateDate(
  date?: string,
  field: string = "date",
  defaultValue: number = NOW - 24 * 60 * 60
): number | string {
  if (!date) return defaultValue;
  const timestamp = Number(date);
  if (isNaN(timestamp) || timestamp < 0)
    throw new Error(`Invalid ${field}. Must be a unixtimestamp.`);
  return timestamp;
}

function validateDomains(
  domain?: string | string[],
  field: string = "domain",
  validDomains = VALID_DOMAINS
): string[] {
  if (!domain) return validDomains;
  const domains = Array.isArray(domain) ? domain : [domain];
  const valid = domains.filter((d) => validDomains.includes(d));
  if (valid.length === 0)
    throw new Error(
      `Invalid ${field}. Must be one or more of: ${validDomains.join(", ")}`
    );
  return valid;
}

function validatePage(page?: string): number {
  if (!page) return 1;
  const pageNum = Number(page);
  if (isNaN(pageNum) || pageNum < 1)
    throw new Error("Invalid page. Must be a positive integer.");
  return pageNum;
}

function validateLimit(limit?: string): number {
  if (!limit) return MAX_LIMIT;
  const limitNum = Number(limit);
  if (isNaN(limitNum) || limitNum < 1)
    throw new Error("Invalid limit. Must be a positive integer.");
  return Math.min(limitNum, MAX_LIMIT);
}

function validateStringField(value?: string, field: string = "field"): string {
  if (!value) throw new Error(`${field} is required.`);
  return value;
}

function validateDateFormat(date?: string): string {
  if (!date) return new Date().toISOString().split("T")[0];
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (!dateRegex.test(date))
    throw new Error("Invalid date format. Use YYYY-MM-DD.");
  return date;
}

function validateWeek(week?: string): string {
  if (!week) {
    const now = new Date();
    const epochStart = new Date(1970, 0, 1);
    const weeksSinceEpoch = Math.floor(
      (now.getTime() - epochStart.getTime()) / (7 * 24 * 60 * 60 * 1000)
    );
    return weeksSinceEpoch.toString();
  }
  const weekNum = Number(week);
  if (isNaN(weekNum) || weekNum < 0)
    throw new Error("Invalid week. Must be a non-negative number.");
  return week;
}

function validateYear(year?: string) {
  const currentDate = new Date();
  const validatedYear = year ? Number(year) : currentDate.getFullYear();
  if (
    isNaN(validatedYear) ||
    validatedYear < 2000 ||
    validatedYear > currentDate.getFullYear()
  )
    throw new Error("Invalid year.");
  return validatedYear.toString();
}

function validateMonth(month?: string): string {
  const currentDate = new Date();
  const validatedMonth = month
    ? month.padStart(2, "0")
    : (currentDate.getMonth() + 1).toString().padStart(2, "0");
  const monthNum = Number(validatedMonth);
  if (isNaN(monthNum) || monthNum < 1 || monthNum > 12)
    throw new Error("Invalid month. Use a number between 1 and 12.");

  return validatedMonth;
}

function validateForKey(key: string, value: any) {
  let result: any;

  switch (key) {
    case "startDate":
      result = validateDate(value, "startDate");
      break;
    case "endDate":
      result = validateDate(value, "endDate", NOW);
      break;
    case "sourceDomain":
      result = validateDomains(value, "sourceDomain");
      break;
    case "destinationDomain":
      result = validateDomains(value, "destinationDomain");
      break;
    case "txHash":
      result = validateStringField(value, "txHash");
      break;
    case "address":
      result = validateStringField(value, "address");
      break;
    case "page":
      result = validatePage(value);
      break;
    case "limit":
      result = validateLimit(value);
      break;
    case "date":
      result = validateDateFormat(value);
      break;
    case "week":
      result = validateWeek(value);
      break;
    case "year":
      result = validateYear(value);
      break;
    case "month":
      result = validateMonth(value);
      break;
    default:
      throw new Error(`Invalid query param: ${key}`);
  }

  return result;
}

export function validateParams(params: QueryParams): {
  isValid: boolean;
  errors: string[];
  validatedParams: Record<string, any>;
} {
  const errors: string[] = [];
  const validatedParams: Record<string, any> = {};

  for (const key in params) {
    try {
      const result = validateForKey(key, params[key as keyof QueryParams]);
      validatedParams[key] = result;
    } catch (error: any) {
      errors.push(error.message);
    }
  }

  return {
    isValid: errors.length === 0,
    errors,
    validatedParams,
  };
}
