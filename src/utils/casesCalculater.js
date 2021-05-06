export default function calculateTotalCases() {
    if(this.state.result)
    {
        let totalCases = 0;
        Object.entries(this.state.result).forEach(item => totalCases+=(item[1].total.confirmed));
        return totalCases;
    }
}


export function calculateActiveCases() {
    if(this.state.result)
    {
        let totalCases = 0;
        Object.entries(this.state.result).forEach(item => {
              totalCases+=(item[1].total.confirmed-item[1].total.deceased-item[1].total.recovered)}
          );
        return totalCases;
    }
  }
  
export function calculateRecoveredCases() {
    if(this.state.result)
    {
        let totalCases = 0;
        Object.entries(this.state.result).forEach(item => {
              totalCases+=(item[1].total.recovered)}
          );
        return totalCases;
    }
  }

export function calculateDeceasedCases() {
    if(this.state.result)
    {
        let totalCases = 0;
        Object.entries(this.state.result).forEach(item => {
              totalCases+=(item[1].total.deceased)}
          );
        return totalCases;
    }
  }
