using Azure.Core;
using IdentityServer4.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

#nullable disable
namespace LoginAPI.Models
{
    public partial class User
    {
        public int Id { get; set; }
        public string Uname { get; set; }
        public string Email { get; set; }
        public string Pwd { get; set; }
        public string Fullname { get; set; }
        public bool? Active { get; set; }
        public int? Rank { get; set; }
        public bool? Ban { get; set; }
    }
    

}
