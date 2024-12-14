/**\
 * 기본 타입 설정 파일
 */

type ErrYn = "Y" | "N";
type Msg = "[SUCCESS] 조회 성공" | "[FAIL] 조회 실패";

interface BaseResponse<T> {
  errYn: ErrYn;
  code: string;
  msg: Msg;
  data: T;
}

interface ApiListResponseDto {
  list: ApiData[];
  totalCount: string;
  totalPage: string;
}

type LoginResponse = BaseResponse<LoginResponseDto>;
type ApiListResponse = BaseResponse<ApiListResponseDto>;
type ScrpResponse = BaseResponse<ScrpDescriptionData>;
