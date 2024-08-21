import { customAlphabet } from "nanoid";

const generateID = () => {
	const alphabet =
		"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
	const id = customAlphabet(alphabet, 6);
	return id();
};

export default generateID;
