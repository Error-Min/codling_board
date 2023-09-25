package com.codingrecipe.board.repository;

import com.codingrecipe.board.entity.BoardFileEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface BoardFileRepository extends JpaRepository<BoardFileEntity, Long> {

    Optional<BoardFileEntity> findByBoardId(Long boardId);
}
