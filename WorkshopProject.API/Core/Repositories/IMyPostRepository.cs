using System.Collections.Generic;
using System.Threading.Tasks;
using WorkshopProject.API.Core.Models;

namespace WorkshopProject.API.Core.Repositories
{
    public interface IMyPostRepository
    {
         Task<IEnumerable<MyPost>> GetMyPosts();
         Task<MyPost> GetMyPost(int id);
    }
}