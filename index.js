import {
  printGrammar,
  printSet,
  findStart,
} from "./uitils.js"
import buildFirstSets, {
  firstSets,
} from "./buildFirstSets.js"
import buildFollowSets, {
  followSets,
} from "./buildFollowSets.js"
import {
  buildNonTerminals,
  buildTerminals,
  buildParserTable,
  drawParsingTable,
  isValid,
} from "./buildParserTable.js"

// const grammar = {
//   1: "X -> YZQ",
//   2: "Y -> ε",
//   3: "Y -> a",
//   4: "Z -> b",
//   5: "Z -> ε",
//   6: `Q -> ε`,
// }

const grammar = {
  1: "S -> aBc",
  2: "S -> bAB",
  3: "A -> aAb",
  4: "A -> b",
  5: "B -> b",
  6: "B -> ε",
}

const text = "babb"

function startUp(grammar, text) {
  printGrammar(grammar)
  buildFirstSets(grammar)
  buildFollowSets(grammar)
  printSet("First sets", firstSets)
  printSet("Follow sets", followSets)
  console.log("NonTerminals: " + buildNonTerminals(grammar))
  console.log("Terminals: " + buildTerminals(grammar))
  const analyseTable = buildParserTable(grammar)
  drawParsingTable(analyseTable)
  const start = findStart(grammar)
  isValid(start, analyseTable, text)
}

startUp(grammar, text)
