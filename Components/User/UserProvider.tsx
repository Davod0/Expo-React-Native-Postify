
  // useState - alla posts
  // useState - inloggad user | null
  // createContext

  
/* en UserProivder ska skapas som innehåller data om users, posts och inloggade user
   denna provider ska ligga runt i allt innehåkk i app-tsx

   en screen ska skapas för att user ska kunna logga in där

   och när man kommer till CreatePostScreen ska en if-sats används där för att kontrollera om user är inlogad eller inte om user är 
   inte inloggad då ska inloggningsskärmen visas annars  CreatePostScreen 
   isSignedIn ? (
      <>
        <PostForm />
      </>
      ) : (
      <>
        <SignInForm />
      </>
    ); 

    samma för UserAccountScreen, favoritePostsScreen 

    och om man är inloggad kommer till CreateUserScreen ska en text bara visas att man inloggad

 */