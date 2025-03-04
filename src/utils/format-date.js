import { format, isValid } from 'date-fns';
import { id } from 'date-fns/locale';

function formatDate(date, formatString) {
	try {
		const parsedDate = new Date(date);

		// Check if the date is valid
		if (!isValid(parsedDate)) {
			return 'Invalid Date';
		}

		// Check if the format string is valid by attempting to format the date
		const formattedDate = format(parsedDate, formatString, {
			locale: id,
		});

		return formattedDate;
	} catch (error) {
		return 'Invalid Format'; // Handle invalid format error
	}
}

export { formatDate };
