using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WorkshopProject.API.Core.Dtos;
using WorkshopProject.API.Core.Repositories;
using WorkshopProject.API.Data;

namespace WorkshopProject.API.Controllers
{
    //[Authorize]
    [Route(("api/[controller]"))]
    [ApiController]
    public class MyPostsController : ControllerBase
    {
        private readonly DataContext _context;

        private readonly IMyPostRepository _myPostRepo;
        private readonly IMapper _mapper;
        public MyPostsController(DataContext context, IMyPostRepository myPostRepo, IMapper mapper)
        {
            _context = context;
            _myPostRepo = myPostRepo;
            _mapper = mapper;
        }

        // GET: api/myposts
        [HttpGet]
        public async Task<IActionResult> GetMyPosts()
        {
            var myPosts = await _context.MyPosts.ToListAsync();
            return Ok(myPosts);
        }

        // GET : api/myposts/id
        [HttpGet("{id}")]
        // [HttpGet("GetMyPost")]
        public async Task<IActionResult> GetMyPost(int id)
        {
            // var myPost = await _context.MyPosts.FirstOrDefaultAsync(p => p.Id == id);
            // return Ok(myPost);

            //--- Repository Pattern ---//
            var myPost = await _myPostRepo.GetMyPost(id);
            var myPostToReturn = _mapper.Map<MyPostToReturnDto>(myPost);

            if(myPost == null){
                return NotFound();
            }

            return Ok(myPost);
        }
    }
}