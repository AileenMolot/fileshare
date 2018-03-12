var files = document.getElementById('files');

    files.onclick = function(e){
      if (e.target.tagName !='TH') return;

      sortFiles(e.target.cellIndex, e.target.getAttribute('data-type'));
    };

    function sortFiles(colNum, type) {
      var tbody = files.getElementsByTagName('tbody')[0];

      var rowsArray = [].slice.call(tbody.rows);

      var compare;

      switch (type) {
        case 'number':
          compare = function(rowA, rowB) {
            return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
          };
          break;
        case 'string':
          compare = function(rowA, rowB) {
            return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML;
          };
          break;
      }

      rowsArray.sort(compare);

      files.removeChild(tbody);

      for (var i = 0; i < rowsArray.length; i++) {
        tbody.appendChild(rowsArray[i]);
      }

      files.appendChild(tbody);

      }