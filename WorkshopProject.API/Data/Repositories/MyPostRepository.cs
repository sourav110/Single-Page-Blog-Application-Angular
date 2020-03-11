using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using WorkshopProject.API.Core.Models;
using WorkshopProject.API.Core.Repositories;

namespace WorkshopProject.API.Data.Repositories
{
    public class MyPostRepository : IMyPostRepository
    {
        private readonly DataContext _context;

        public MyPostRepository(DataContext context)
        {
            _context = context;
        }
        public async Task<MyPost> GetMyPost(int id)
        {
            var myPost = await _context.MyPosts.FirstOrDefaultAsync(p => p.Id == id);
            return myPost;
        }

        public async Task<IEnumerable<MyPost>> GetMyPosts()
        {
            var myPosts = await _context.MyPosts.ToListAsync();
            return myPosts;
        }
    }
}