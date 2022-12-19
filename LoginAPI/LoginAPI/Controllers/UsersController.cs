using LoginAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Crm.Sdk.Messages;
using Nest;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using LoginAPI.Models;

namespace LoginAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {

        [HttpGet]
        [Route("GetUser")]

        public IActionResult GetUser()
        {
            List<User> list = new List<User>();
            using (var context = new loginContext())
            {
                try
                {

                    return StatusCode(200, context.Users.ToList());
                }
                catch (Exception ex)
                {

                    return BadRequest(ex.Message);
                }

            }
        }

        [HttpPost]
        [Route("PostUser")]

        public IActionResult PostUser(User user)
        {
            using (var context = new loginContext())
            {
                try
                {
                    context.Users.Add(user);
                    context.SaveChanges();
                    return StatusCode(201, "A felhasználó hozzáadása sikeresen megtörtént.");
                }
                catch (Exception ex)
                {
                    return BadRequest(ex.Message);
                }

            }
        }

        [HttpPut]
        [Route("PutUser")]

        public IActionResult PuttUser(User user)
        {
            using (var context = new loginContext())
            {
                try
                {
                    context.Users.Update(user);
                    context.SaveChanges();
                    return StatusCode(290, "A felhasználó adatainak a módosítása sikeresen megtörtént.");
                }
                catch (Exception ex)
                {
                    return BadRequest("Módosítás sikertelen" + ex.Message);
                }
            }
        }

        [HttpDelete]
        [Route("DeleteUser")]

        public IActionResult DeleteUser(int Id)
        {
            using (var context = new loginContext())
            {
                try
                {
                    User user = new User();
                    user.Id = Id;
                    context.Users.Remove(user);
                    context.SaveChanges();
                    return StatusCode(204, "A felhasználó adatainak törlése sikeresen megtörtént.");
                }
                catch (Exception ex)
                {
                    return BadRequest(ex.Message);
                }
            }
        }
        

    }
}
  

