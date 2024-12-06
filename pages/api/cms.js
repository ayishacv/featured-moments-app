import { db } from "../../firebaseConfig";
import { collection, addDoc, getDocs, deleteDoc, doc, query, orderBy } from "firebase/firestore";

const collectionName = "cards";

export default async function handler(req, res) {
    if (req.method === "GET") {
        try {
            const q = query(collection(db, collectionName), orderBy("createdAt", "desc")); // Order by latest
            const snapshot = await getDocs(q);
            const cards = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            res.status(200).json(cards);
        } catch (error) {
            res.status(500).json({ message: "Error fetching cards", error });
        }
    } else if (req.method === "POST") {
        const { title, description, image } = req.body;

        try {
            await addDoc(collection(db, collectionName), {
                title,
                description,
                image,
                createdAt: new Date(), // Store timestamp for sorting
            });
            res.status(201).json({ message: "Card added successfully!" });
        } catch (error) {
            res.status(500).json({ message: "Error adding card", error });
        }
    } else if (req.method === "DELETE") {
        const { id } = req.body;

        try {
            await deleteDoc(doc(db, collectionName, id));
            res.status(200).json({ message: "Card deleted successfully!" });
        } catch (error) {
            res.status(500).json({ message: "Error deleting card", error });
        }
    } else {
        res.status(405).json({ message: "Method not allowed" });
    }
}
