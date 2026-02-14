import { NAV_ITEMS } from "constants/constant";
import { Box } from "lucide-react";
import { useState } from "react";
import Button from "./ui/Button";
import { useOutletContext } from "react-router";

const Navbar = () => {
   const { isSignedIn, signIn, signOut, userName } = useOutletContext<AuthContext>();


      
 const handleAuthClick = async () => {
   if(isSignedIn){
      try {
         await signOut();
      } catch (error: any) {
         console.log(`Puter Sign out failed ${error.message}`)
      }
      return;
   }
   try {
      await signIn()
   } catch (error: any) {
      console.log(`Puter Sign In failed ${error.message}`);

   }
 };


  return (
    <div className="navbar">
      <nav className="inner">
        <div className="left">
          <div className="brand">
            <Box className="logo" />
            <span className="name">Roomify</span>
          </div>
          <ul className="links">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="actions">
            {isSignedIn ? 
            (
               <>
                <span className="greeting">
                  {userName ? `Hi ${userName}` : "Signed in"}
                </span>
                <Button onClick={handleAuthClick}>
                  Logout
                </Button>
               </>
            ): (
               <>
               <Button variant="ghost" size="sm" onClick={handleAuthClick}>
                  Login
               </Button> 
               <a href="#upload" className="cta">Get Started</a>
               </>
            )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
