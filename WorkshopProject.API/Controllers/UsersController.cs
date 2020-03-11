using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using WorkshopProject.API.Core.Dtos;
using WorkshopProject.API.Core.Repositories;

namespace WorkshopProject.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IUserRepository _userRepo;
        private readonly IMapper _mapper;
        public UsersController(IUserRepository userRepo, IMapper mapper)
        {
            _userRepo = userRepo;
            _mapper = mapper;
        }

        [HttpGet("GetUser")]
        public async Task<IActionResult> GetUser(int id) 
        {
            var user = await _userRepo.GetUser(id);
            var userToReturn = _mapper.Map<UserToReturnDto>(user);
            
            if(user == null){
                return NotFound();
            }
            return Ok(userToReturn);
        }
    }
}