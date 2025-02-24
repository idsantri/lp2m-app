import { format } from 'date-fns';

function formatDate(date, formatString) {
	try {
		return format(new Date(date), formatString); // Format tanggal
	} catch (error) {
		// console.error('Error formatting date:', error);
		return 'Invalid Date'; // Handle error
	}
}
export { formatDate };
