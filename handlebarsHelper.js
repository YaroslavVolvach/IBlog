function format (date) {return date < 10 ? `0${date}` : date.toString()}
function formatDate (data) {
    const date = new Date(data);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${year} / ${format(month)} / ${format(day)}`;
};


function formatPlural (word, amount){
    if (amount !== 1) {
      return `${word}s`;
    }
    return word;
}

module.exports = {formatDate: formatDate, formatPlural: formatPlural};

  
 