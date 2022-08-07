const a = new Date();
const date = new Intl.DateTimeFormat('pt-br', { day: 'numeric', month: 'long', year: 'numeric' }).format(a);
console.log(b);