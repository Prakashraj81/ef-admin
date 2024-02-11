// User delete api
import { sql, config } from '/config';

export default async (req, res) => {
    let { Id } = req.body;
    if (Id !== 0) {
        try {
            await sql.connect(config);
            await sql.query`
                UPDATE event_master
                SET active=${2}, modified_by=${"Admin"}
                WHERE Id=${Id}`;
            res.status(200).json({ message: 'Events deleted successfully' });
        } catch (error) {
            console.error('Error updating:', error);
            res.status(500).json({ error: 'Internal server error' });
        } finally {
            await sql.close();
        }
    } else {
        res.status(400).json({ error: 'Invalid Id provided' });
    }
}
