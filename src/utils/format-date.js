import { format } from 'date-fns';
import { id } from 'date-fns/locale';

function formatDate(date, formatString) {
	try {
		return format(new Date(date), formatString, {
			locale: id,
		}); // Format tanggal
	} catch (error) {
		// console.error('Error formatting date:', error);
		return 'Invalid Date'; // Handle error
	}
}
export { formatDate };
