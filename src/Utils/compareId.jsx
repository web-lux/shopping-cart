export default function compareId(a, b) {
    if (a.id < b.id) {
        return -1;
    } else if (a.id > b.id) {
        return 1;
    } else {
        return 0;
    }
}