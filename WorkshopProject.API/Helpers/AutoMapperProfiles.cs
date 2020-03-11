using AutoMapper;
using WorkshopProject.API.Core.Dtos;
using WorkshopProject.API.Core.Models;

namespace WorkshopProject.API.Helpers
{
    public class AutoMapperProfiles : Profile 
    {
        public AutoMapperProfiles()
        {
            CreateMap<UserToRegisterDto, User>();
            CreateMap<UserToLoginDto, User>();
            CreateMap<User, UserToReturnDto>();

            CreateMap<MyPost, MyPostToReturnDto>();
        }        
    }
}