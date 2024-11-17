import logout from "../../support/PageObjectModel/Logout.cy"
import login from "../../support/PageObjectModel/Login.y"
import link from "../../support/PageObjectModel/Link.cy"
describe('pom1',()=>{
  const loginobj = new login()
  const logoutobj = new logout()
  const linkobj = new link()

  it('fetch',()=>{
    loginobj.url_login()
    loginobj.loginPom()
    linkobj.clickonlink('Admin')
    logoutobj.Logoutoftheapp()

  });
});
