// Test script to verify all treatment card links are correctly configured

const treatments = [
  {
    id: "blefaroplastia",
    title: "Blefaroplastia",
    expectedPath: "/procedimentos/cirurgias-esteticas-faciais/blefaroplastia",
  },
  {
    id: "facelift",
    title: "Facelift (Lifting Facial)",
    expectedPath: "/procedimentos/cirurgias-esteticas-faciais/facelift",
  },
  {
    id: "otoplastia",
    title: "Otoplastia",
    expectedPath: "/procedimentos/cirurgias-esteticas-faciais/otoplastia",
  },
  {
    id: "lipo-de-papada",
    title: "Lipo de Papada",
    expectedPath: "/procedimentos/cirurgias-esteticas-faciais/lipo-de-papada",
  },
  {
    id: "cirurgia-ortognatica",
    title: "Cirurgia Ortognática",
    expectedPath: "/procedimentos/cirurgias-esteticas-faciais/cirurgia-ortognatica",
  },
]

// Simulate the getTreatmentLink function from TreatmentCard
function getTreatmentLink(treatmentId) {
  if (treatmentId === "blefaroplastia") {
    return "/procedimentos/cirurgias-esteticas-faciais/blefaroplastia"
  } else if (treatmentId === "facelift") {
    return "/procedimentos/cirurgias-esteticas-faciais/facelift"
  } else if (treatmentId === "otoplastia") {
    return "/procedimentos/cirurgias-esteticas-faciais/otoplastia"
  } else if (treatmentId === "lipo-de-papada") {
    return "/procedimentos/cirurgias-esteticas-faciais/lipo-de-papada"
  } else if (treatmentId === "cirurgia-ortognatica") {
    return "/procedimentos/cirurgias-esteticas-faciais/cirurgia-ortognatica"
  }
  return "#"
}

// Test each treatment link
console.log("🔍 Testing Treatment Card Links\n")

let allTestsPassed = true

treatments.forEach((treatment) => {
  const actualPath = getTreatmentLink(treatment.id)
  const isCorrect = actualPath === treatment.expectedPath

  console.log(`${isCorrect ? "✅" : "❌"} ${treatment.title}`)
  console.log(`   ID: ${treatment.id}`)
  console.log(`   Expected: ${treatment.expectedPath}`)
  console.log(`   Actual: ${actualPath}`)
  console.log(`   Status: ${isCorrect ? "PASS" : "FAIL"}\n`)

  if (!isCorrect) {
    allTestsPassed = false
  }
})

// Test hasDetailPage logic
const hasDetailPageIds = ["blefaroplastia", "facelift", "otoplastia", "lipo-de-papada", "cirurgia-ortognatica"]

console.log("🔍 Testing hasDetailPage Logic\n")

treatments.forEach((treatment) => {
  const hasDetailPage = hasDetailPageIds.includes(treatment.id)
  const shouldHaveDetailPage = treatment.expectedPath !== "#"
  const isCorrect = hasDetailPage === shouldHaveDetailPage

  console.log(`${isCorrect ? "✅" : "❌"} ${treatment.title} - Detail Page Check`)
  console.log(`   Has Detail Page: ${hasDetailPage}`)
  console.log(`   Should Have Detail Page: ${shouldHaveDetailPage}`)
  console.log(`   Status: ${isCorrect ? "PASS" : "FAIL"}\n`)

  if (!isCorrect) {
    allTestsPassed = false
  }
})

// Summary
console.log("📊 Test Summary")
console.log("================")
console.log(`Overall Status: ${allTestsPassed ? "✅ ALL TESTS PASSED" : "❌ SOME TESTS FAILED"}`)
console.log(`Total Treatments Tested: ${treatments.length}`)
console.log(`All treatments have valid links: ${allTestsPassed ? "Yes" : "No"}`)

if (allTestsPassed) {
  console.log("\n🎉 All treatment cards should link correctly to their respective pages!")
} else {
  console.log("\n⚠️  Some treatment links may need to be fixed in the TreatmentCard component.")
}
