enum UserRole {
  Admin = "Admin",
  Editor = "Editor",
  Viewer = "Viewer",
}

const canEidit = (role: UserRole) => {
  if (role === UserRole.Admin || role === UserRole.Editor) {
    return true;
  } else {
    return false;
  }
};

const result = canEidit(UserRole.Admin);

console.log(result);
