export default function formatter(val) {
    return new Intl.NumberFormat('en-IN').format(val);
}