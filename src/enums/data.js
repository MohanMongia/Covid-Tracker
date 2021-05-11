const timings = {
    "dataValidDuration": 5*60*1000
}

const headings = {
    "A":"Total Confirmed",
    "B":"Active",
    "C":"Total Recovered",
    "D":"Deceased"
}

const defaultResult = {
    defaultArray : [0,0,0,0]
}

const codeToState = {
    "AN" : "Andaman and Nicobar Islands",
    "AP" : "Andhra Pradesh",
    "AR" : "Arunachal Pradesh",
    "AS" : "Assam",
    "BR" : "Bihar",
    "CH" : "Chandigarh",
    "CT" : "Chhattisgarh",
    "DL" : "Delhi",
    "DN" : "Dadra and Nagar Haveli",
    "GA" : "Goa",
    "GJ" : "Gujarat",
    "HP" : "Himachal Pradesh",
    "HR" : "Haryana",
    "JH" : "Jharkhand",
    "JK" : "Jammu and Kashmir",
    "KA" : "Karnataka",
    "LA" : "Ladakh",
    "LD" : "Lakshadweep",
    "MH" : "Maharashtra",
    "ML" : "Meghalaya",
    "MN" : "Manipur",
    "MP" : "Madhya Pradesh",
    "MZ" : "Mizoram",
    "NL" : "Nagaland",
    "OR" : "Odisha",
    "PB" : "Punjab",
    "PY" : "Puducherry",
    "RJ" : "Rajasthan",
    "SK" : "Sikkim",
    "TG" : "Telangana",
    "TN" : "Tamil Nadu",
    "TR" : "Tripura",
    "TT" : "Unknown",
    "UP" : "Uttar Pradesh",
    "UT" : "Uttarakhand",
    "WB" : "West Bengal"
}

const stateToCode = {
    "Andaman and Nicobar Islands" : "AN",
    "Andhra Pradesh" : "AP",
    "Arunachal Pradesh" : "AR",
    "Assam" : "AS",
    "Bihar" : "BR",
    "Chandigarh" : "CH",
    "Chhattisgarh" : "CT",
    "Delhi" : "DL",
    "Dadra and Nagar Haveli" : "DN",
    "Goa" : "GA",
    "Gujarat" : "GJ",
    "Himachal Pradesh" : "HP",
    "Haryana" : "HR",
    "Jharkhand" : "JH",
    "Jammu and Kashmir" : "JK",
    "Karnataka" : "KA",
    "Ladakh" : "LA",
    "Lakshadweep" : "LD",
    "Maharashtra" : "MH",
    "Meghalaya" : "ML",
    "Manipur" : "MN",
    "Madhya Pradesh" : "MP",
    "Mizoram" : "MZ",
    "Nagaland" : "NL",
    "Odisha" : "OR",
    "Punjab" : "PB",
    "Puducherry" : "PY",
    "Rajasthan" : "RJ",
    "Sikkim" : "SK",
    "Telangana" : "TG",
    "Tamil Nadu" : "TN",
    "Tripura" : "TR",
    "Uttar Pradesh" : "UP",
    "Uttarakhand":"UT",
    "West Bengal" : "WB"
}

module.exports ={
    timings,
    headings,
    defaultResult,
    codeToState,
    stateToCode
}