using API.DTO;
using API.Interfaces;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class UserController : BaseApiController
    {
        private readonly IUserRepository _userRepository;  
        private readonly IMapper _mapper;

        public UserController(IUserRepository userRepository, IMapper mapper) 
        {
            _mapper = mapper;
            _userRepository = userRepository;
        }
        [HttpGet]
        public async Task <ActionResult<IEnumerable<MemberDto>>> GetUsers() 
        {
            var users = await _userRepository.GetMembersAsync();


            return Ok(users);
        }
        [HttpGet("{username}")]
        public async Task<ActionResult<MemberDto>> GetUser(string username) 
        {
            return await _userRepository.GetMemberAsync(username);

        }
    }
}
