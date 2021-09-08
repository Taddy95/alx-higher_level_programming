#include "lists.h"

/**
 * check_cycle - Checks if a  singly linked list has a cycle in it
 * @n: integer
 * @next: points to the next node
 *
 * Description: singly linked list node structure
 * for Holberton project
 */
int check_cycle(listint_t *list)
{
	listint_t *current = list, *tmp = list;

	while (tmp && tmp->next)
	{
		current = current->next;
		tmp = tmp->next->next;

		if (current == tmp)
			return (1);
	}

	return (0);
}
