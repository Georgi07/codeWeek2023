export const validateUsernameAndPassword = (
    username,
    password
  ) => {
    if (!username && !password) {
      return "USERNAME AND PASSWORD MUST BE FILLED IN!";
    } else if (!username) {
      return "USERNAME MUST BE FILLED IN!";
    }
    else if( username.length < 3){
        return "USERNAME MUST CONTAINS MORE THAN 3 CHARS"
    }
    else if( password.length < 6){
        return "PASSWORD MUST CONTAINS MORE THAN 6 CHARS"
    }
    return "";
  };
  