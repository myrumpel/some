"use strict"

const personalPlanPeter = {
  name: "Peter",
  age: "29",
  skills: {
    languages: ["ru", "eng"],
    programmingLangs: {
      js: "20%",
      php: "10%",
    },
    exp: "1 month",
  },
  showAgeAndLangs: function (obj) {
    const langs = obj.skills.languages
    let langsStr = langs.toString().split(",").join(" ").toUpperCase()
    return `Мне ${obj.age} и я владею языками: ${langsStr}`
  },
}
console.log(personalPlanPeter.showAgeAndLangs())
function showExperience(plan) {
  const { exp } = plan.skills
  return exp
}

function showProgrammingLangs(plan) {
  if (!plan.skills) return ""
  const { programmingLangs } = plan.skills
  let key
  let chunks = ""

  mark: for (key in programmingLangs) {
    if (!key) {
      break mark
    }
    chunks += `Язык ${key} изучен на ${programmingLangs[key]} `
  }
  chunks += "\n"
  chunks.trim()
  return chunks
}

console.log(showProgrammingLangs(""))
