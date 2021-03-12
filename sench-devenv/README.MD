🟩 **graphql** query(GET)
- contentGet
- meetGet
- userGet

🟩 **graphql** mutation(POST)
- userAdd
- userDelete
- userEdit
- meetAdd
- meetDelete
- meetEdit
- contentAdd
- contentDelete
- contentEdit
  <br>
  <br>
  !graphQl 특성상 원하는 값을 가져오기 때문에 리퀘스트의 값은 유동적.

___
<br>




🟩 **API(POST)**

- /multiMeetJoin(userId,meetId) - 조인
- /meetContentJoin(contentId,meetId) - 조인
- /meetContentDelete(contentId,meetId) - 해당 가계부내의 자료 삭제
- /multiMeetDelete(userId,meetId) - 유저의 가계부(meet)중 하나 삭제
- /meetDel(meetId) - Meets의 값을 지우기위해 조인테이블 값 삭제
- /contentDel(contentId) - meetContent내의 contentId 값 삭제



___
