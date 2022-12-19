using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using System;
using System.Web;
using LoginAPI.Models;

namespace LoginAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        [HttpPost]

        public IActionResult Login(string uname, string pwd)
        {
            using (var context = new loginContext())
            {
                try
                {
                    List<User> talalat = new List<User>(context.Users.Where(f => f.Uname == uname));
                    if (talalat.Count > 0 && talalat[0].Active == true)
                    {
                        bool talalt = false;
                        int index = 0;
                        int elemSzam = Program.LoggedInUsers.Count;
                        while (!talalt && index < elemSzam)
                        {
                            if (Program.LoggedInUsers.ElementAt(index).Value.Uname == uname)
                            {
                                lock (Program.LoggedInUsers)
                                {
                                    Program.LoggedInUsers.Remove(Program.LoggedInUsers.ElementAt(index).Key);
                                }
                                talalt = true;
                            }
                            index++;
                        } 
                    }
                    else
                    {
                        return BadRequest("Hibás név/Inaktív felhasználó!");
                    }
                }
                catch (Exception ex)
                {
                    return BadRequest(ex.Message);
                }
            }
            return Ok("Sikeres bejelentkezés");
        }
    }
}
