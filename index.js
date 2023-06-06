// Import stylesheets
import './helpers/style.css';
import * as helper from './helpers/helpers.js';

// LOUDIYI ISMAIL

function solutionExercice1(N) {
  let res = 0;
  for (let i = 1; i <= N; i++) {
    const chiffres = i.toString().split('');
    let estRange = true;
    for (let j = 1; j < chiffres.length; j++) {
      if (parseInt(chiffres[j]) < parseInt(chiffres[j - 1])) {
        estRange = false;
        break;
      }
    }
    if (estRange) {
      res = i;
    }
  }
  return res;
}

function solutionExercice2(L) {
  // Set pour créez un nouvel ensemble  à partir de la liste L pour éliminer les doublons et faciliter la recherche.
  const set = new Set(L);
  let res = 1;
  while (set.has(res)) {
    res++;
  }
  return res;
}

function solutionExercice3(L) {
  const hashmap = new Map();
  for (const num of L) {
    if (hashmap.has(num)) {
      hashmap.delete(num);
    } else {
      hashmap.set(num, 1);
    }
  }
  // Il ne devrait rester qu'un seul élément dans la hashmap
  for (const num of hashmap.keys()) {
    return num;
  }
}

helper.displayOnHtml(solutionExercice1(1000), '1');
helper.displayOnHtml(solutionExercice2([1, 4, 7, 5, 3, 6, 3]), '2');
helper.displayOnHtml(solutionExercice3([1, 5, 3, 6, 4, 3, 1, 5, 4]), '3');
