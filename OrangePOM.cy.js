import Login from "../../support/ORANGE_HRM/Login.cy";
import AdminGet from "../../support/ORANGE_HRM/AdminGet.cy";
import TextCheck from "../../support/ORANGE_HRM/TextCheck.cy";
import GeneralTest from "../../support/ORANGE_HRM/GeneralTest.cy";

describe('Orange hrm', () => {
    const LoginObj = new Login();
    const AdminGetObj = new AdminGet()
    const TextCheckObj = new TextCheck()
    const GeneralTestObj = new GeneralTest()





    it('Valid login', () => {
        LoginObj.ValidLogin()
    });

    it('InValid login', () => {
        LoginObj.InvalidLogin()
    });

    it('ValidName', () => {
        LoginObj.ValidName()
    });
    it('ValidName', () => {
        LoginObj.ValidName()
    });

    it('InvalidName', () => {
        LoginObj.InvalidName()
    });





    it('admin get', () => {
        AdminGetObj.AdminGet()
    });

    it('PomGet', () => {
        AdminGetObj.PomGet()
    });
    
    it('LeaveGet', () => {
        AdminGetObj.LeaveGet()
    });

    it('LeaveGet', () => {
        AdminGetObj.TimeGet()
    });
    it('TextCheckAdmin', () => {
        TextCheckObj.TextCheckAdmin()
    });

    it('TextCheckPOM', () => {
        TextCheckObj.TextCheckPOM()
    });

    it('TextCheckLeave', () => {
        TextCheckObj.TextCheckLeave()
    });

    it('TextCheckLeave', () => {
        TextCheckObj.TextCheckTime()
    });




    it('GeneralTestClick', () => {
        GeneralTestObj.GeneralTest()
    });
    it('clickOnFirstUsername', () => {
        GeneralTestObj.clickOnFirstUsername()
    });

    it('clickOnSecondUsername', () => {
        GeneralTestObj.clickOnSecondUsername()
    });

    it('clickOnThirdUsername', () => {
        GeneralTestObj.clickOnThirdUsername()
    });

    it('typeOnEmployeeNameInPIM', () => {
      GeneralTestObj.typeOnEmployeeNameInPIM()
});

});