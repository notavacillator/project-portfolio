export const validateData = (value : unknown, maxLength : number ) => {
    if(!value || typeof value !== 'string' || value.length > maxLength){
      return false; 
    }
    return true; 
  }