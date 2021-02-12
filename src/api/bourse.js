import http from "./";

export const fetchbourse = async () => {
    try {
        const {
            data: { bourse },
        } = await http.get('https://data.nadpco.com/v1/BaseInfo/Companies');
        return bourse;
    } catch (err) {
        console.log(err);
    }
};
